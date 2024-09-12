                         ##Coding Task
Create a REST api to be consumed by a mobile app, which is somewhat similar to various popular apps
which tell you if a number is spam, or allow you to find a person’s name by searching for their phone
number.
You can use whichever language/framework you're most comfortable in. However, we give strong
preference to candidates in the pipeline who’ve done it using Django, and to a lesser extent Flask or
Rails. For persistence you need to use a relational database along with an ORM for your framework. We
will not evaluate NoSQL or raw SQL queries.
Terminology and assumptions:
● Each registered user of the app can have zero or more personal “contacts”.
● The “global database” is basically the combination of all the registered users and their personal
contacts (who may or may not be registered users).
● The UI will be built by someone else - you are simply making the REST API endpoints to be
consumed by the front end.
● You will be writing the code as if it’s for production use and should thus have the required
performance and security. However, only you should use only a web server (the development
server is fine) and a database, and just incorporate all concepts using these two servers. Do not
use other servers.
Data to be stored for each user:
● Name, Phone Number, Email Address.
Registration and Profile:
● A user has to register with at least name and phone number, along with a password, before
using. He can optionally add an email address.
● Only one user can register on the app with a particular phone number.
● A user needs to be logged in to do anything; there is no public access to anything.
● You can assume that the user’s phone contacts will be automatically imported into the app’s
database - you don’t need to implement importing the contacts.
Spam:
● A user should be able to mark a number as spam so that other users can identify spammers via
the global database. Note that the number may or may not belong to any registered user or
contact - it could be a random number.
Search:
● A user can search for a person by name in the global database. Search results display the name,
phone number and spam likelihood for each result matching that name completely or partially.
Results should first show people whose names start with the search query, and then people
whose names contain but don’t start with the search query.
● A user can search for a person by phone number in the global database. If there is a registered
user with that phone number, show only that result. Otherwise, show all results matching that
phone number completely - note that there can be multiple names for a particular phone number
in the global database, since contact books of multiple registered users may have different names
for the same phone number.
● Clicking a search result displays all the details for that person along with the spam likelihood. But
the person’s email is only displayed if the person is a registered user and the user who is
searching is in the person’s contact list.



# Spam Detection REST API

This is a REST API designed for a spam detection app, where users can register, log in, mark numbers as spam, and search for contacts in a global database. The project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Prerequisites

Before running the project, ensure that you have the following installed:
- **Node.js** (v16+)
- **MongoDB**

## Features
- User registration and login with JWT authentication.
- Ability to mark phone numbers as spam.
- Search by name or phone number in a global contact database.
- Search results sorted by relevance and spam likelihood.

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd spam-detection-api
npm install
Set Up Environment Variables

Create a .env file in the root directory using the .env.example as a reference. Set up the following environment variables:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret 


API Endpoints
User Registration & Authentication
POST /api/users/register: Register a new user
Request body: { "name": "John Doe", "phone": "1234567890", "password": "password123", "email": "optional@email.com" }
POST /api/users/login: Log in a user and get a token
Request body: { "phone": "1234567890", "password": "password123" }
Spam Marking
POST /api/spam/mark: Mark a phone number as spam
Request body: { "phone": "9876543210" }
Search
GET /api/search/name: Search for a person by name
Query param: ?name=John
GET /api/search/phone: Search for a person by phone number
Query param: ?phone=1234567890