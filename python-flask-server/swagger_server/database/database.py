from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session

engine = create_engine("postgresql://postgres:postgres@localhost/gsi_database")
#db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Session = sessionmaker(bind=engine)
#connection = engine.connect()
db_session = Session()# bind=connection
#db_session._model_changes = {}

Base = declarative_base()
#Base.query = db_session.query_property()

"""
connection = engine.connect()
result = connection.execute("select * from account")
for row in result:
    print("account_id:", row['account_id'])
    print("account_username:", row['account_username'])
    print("account_password:", row['account_password'])
    print("account_email:", row['account_email'])
connection.close()
"""