#!/usr/bin/python

from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SimpleHTTPServer
import SocketServer
import sys
import os
import re
global upload_root
global xml_root
global DOCUMENT_ROOT

class S(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_HEAD(self):
        self._set_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Access-Control-Allow-Methods","GET, POST, PUT")
        self.send_header("Access-Control-Allow-Headers","content-type, content-disposition")
        self.end_headers()

    def do_GET(self):
      if self.path.startswith("/listPrograms"):
        filelist = "<table>"
        print "Searching xml files in " + xml_root
        for f in os.listdir(xml_root):
          if re.search('xml$', f):
              button = '<button onclick=loadProgram("' + f + '")>Cargar</button>'
              filelist += "<tr><td>" + f + "</td><td>" + button + "</td></tr>"

        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
        self.wfile.write(filelist)
      elif self.path.startswith('/loadProgram?file='):
        my_filename = xml_root + self.path.split("=")[1]
        self.send_response(200)
        self.send_header('Content-type','text/xml')
        self.end_headers()
        f = open(my_filename,"r")
        self.wfile.write(f.read())
        f.close()
      else:
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        size = int(self.headers['content-length'])
        data = self.rfile.read(size)

	if self.path == '/runProgram':
          with open(upload_root + "programa.py", 'w') as fh:
            fh.write(data)
          os.system("/bin/chmod a+x " + upload_root + "programa.py")
          os.system("/usr/bin/python " + upload_root + "programa.py")

	elif self.path.startswith('/saveProgram?file='):
          my_filename = xml_root + self.path.split("=")[1] + ".xml"
          print "Saving " + my_filename
          with open(my_filename, 'w') as fh:
            fh.write(data)

        self._set_headers()
        self.send_response(200)

def run(server_class=HTTPServer, handler_class=S, port=8000):
    global upload_root
    global xml_root

    DOCUMENT_ROOT = os.path.dirname(os.path.realpath(__file__))
    DOCUMENT_ROOT = os.path.dirname(DOCUMENT_ROOT)
    upload_root = os.path.dirname(DOCUMENT_ROOT) + os.sep
    xml_root = os.path.dirname(DOCUMENT_ROOT) + os.sep + "xml" + os.sep

    os.chdir(DOCUMENT_ROOT)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print 'Starting httpd...'
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
