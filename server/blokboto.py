#!/usr/bin/python

from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SimpleHTTPServer
import SocketServer
import sys
import os
import re

DOCUMENT_ROOT="/home/robot/"
DOCUMENT_ROOT="/home/edu/mapache/home/edu/src/"

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
        for f in os.listdir(DOCUMENT_ROOT + "blokboto/"):
          if re.search('xml$', f):
              button = '<button onclick=loadProgram("' + f + '")>Cargar</button>'
              filelist += "<tr><td>" + f + "</td><td>" + button + "</td></tr>"

        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
        self.wfile.write(filelist)
      elif self.path.startswith('/loadProgram?file='):
        my_filename = DOCUMENT_ROOT + "blokboto/" + self.path.split("=")[1]
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
          with open(DOCUMENT_ROOT + "programa.py", 'w') as fh:
            fh.write(data)
          os.system("/bin/chmod a+x " + DOCUMENT_ROOT + "programa.py")
          os.system("/usr/bin/python " + DOCUMENT_ROOT + "programa.py")

	elif self.path.startswith('/saveProgram?file='):
          my_filename = DOCUMENT_ROOT + "blokboto/" + self.path.split("=")[1] + ".xml"
          print "Saving " + my_filename
          with open(my_filename, 'w') as fh:
            fh.write(data)

        self._set_headers()
        self.send_response(200)

def run(server_class=HTTPServer, handler_class=S, port=8000):
    os.chdir(DOCUMENT_ROOT + "blokboto")
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
