CMD docker build -t myimage:latest -f- https://github.com/ohheybell/gitpollrepo.git <<EOF
COPY . /ohheybell-poll-pusher

CMD pip install virtualenv
CMD virtualenv .venv
CMD source .venv/bin/activate
CMD pip install flask
CMD pip install -U flask-cors
CMD pip install simplejson
CMD pip install pusher

CMD export FLASK_ENV=development
CMD python3 dbsetup.py
CMD flask run
