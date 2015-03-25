## Install/Running instructions

### Prerequisites
- Have mysql server running on default port and import `java-api/sql/test.sql` file
- Have MongoDB server running on default port

### Building and running `java-api`

Within java-api root run 

    mvn package
    sh target/bin/webapp

## Building and running `mean` stack

Within mean root run

    npm install
    bower install
    grunt server

once complete a browser tab should open on the homepage of the project

