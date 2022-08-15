# Ecomm-Backend

## Description

APP VIDEO: [link](https://drive.google.com/file/d/1GafK4ji-7Qai_J7CywByZRKJHKcYMmYN/view)
PROJECT REPO: [link](https://github.com/Ajimoto/Ecomm-backend)

This application is a simple example of a blog style website where users can create an account and post/view information from other users.

Deployed Application: NA

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To get started in the development environment, follow the following steps:

1.  Clone this the repo found at this [link](https://github.com/Ajimoto/Ecomm-backend)
2.  Open a terminal and navigate to the root directory of the project
3.  Run 'npm i' to get the project dependecies
4.  Download and Sign up for MySQL by following this guide: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide
5.  Rename .env.EXAMPLE to '.env', and fill in the DB_PASSWORD= '' with the password you created for MySQL, fill the session SESSION_SECRET= '' with a random string you can remember
6.  Open a terminal shell and run 'mysql -u root -p' and tehn enter your password to start a MySQL instance on your computer
7.  Run 'SOURCE db/schema.sql;' to create the database and then 'exit;'
8.  Run 'node seeds/seeds.js' to seed the database with users
9.  Run 'node index.js' to start the server
10. Open a browser of your choice and visit http://localhost:3001/ to start the application. Usable through insomnia.

## Usage

To use our application, you can use insomnia to add delete and create various categories and products. this app is for test purposes only.

![Alt text](</Screen%20Shot%202022-08-15%20at%203.59.57%20PM%20(3).png>)

## Credits

Created by:

- [Austin Gentz](https://github.com/Ajimoto)

## License

MIT License

Copyright (c) 2022 Austin Gentz.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
