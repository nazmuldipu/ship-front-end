# ShipFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


# Roles funstions:
## Ship admin:
    1) CRUD agent with commission rate
    2) Sell/Reserve with 2 month advance.
    3) Seat status with cancel reservation
    4) Cancel seat reservation one by one
    5) Print ticket with booking id
    6) Accounting cash book
    7) Accounting Add incomes
    8) Accounting Add expenses
    9) Hotelswave ledger
    10) Agent balance
    11) Report : Sells report by sells day/ by journey day
    12) Report : Sells report range by sells day/ by journey day
    13) Report : Counter Report
    14) Report : Booking report
    15) Report : Individual report
    16) Report : Agent cash

## Ship agent:
    1) Sell with 1 month advance
    2) My sells
    3) Ledger
    4) My Balance

### Optinals
    5) Reservation
    6) Cancel reservation
    7) Cancel booking    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ng build --prod --base-href "/" && npx angular-cli-ghpages --dir dist/ship-front-end --no-silent

npx ngh --dir=dist/ship-front-end --no-silent --repo=git@github.com:nazmuldipu/iToursShip.git

BAY cruiser -> 9:30am / 3:00pm
Sukanto babu -> 10:00 - 5:00
LCT kajol

Accounts:
Sukantababu -> Farhan Express Tourism -> 01814344256 -> sayed509
Bay cruiser -> Bahadur Hossain -> 01779181872 -> bahadur69
Kajol

Hasnahena  1400   100 => Total seat 90 -> extra 3
Rajanigandha  1300  => Total Seat 102
Krishnachura    1600 => Total Seat 57


Oceania Tours & Travels	01820248205	400		-> BDT 6,400.00
Eureka Tours & Service	01614100700	400		-> BDT 15,200.00
Sundrop Tours & Travels	01615153036	400	sundrop3036@gmail.com

bug1: service agent -> cancel ticket -> accounting problem -> money is not getting back

update:
1) multiple cancel
2) status seat plan
update 20191107:

Update 20201202:
    1. Change Cover photo
    2. Change Hotelswave logo
    3. Login Page => add Hotelswave.com branding
    4. Print ticket link at dashboard
    5. Move seat status link at seat menu
    6. At agent account select deafult category
    7. Dashboar SOLD/UNSOLD info add date
    8. Sell page show number of selected number of seat
    9. Deafult Ship order for agents
    10. In menu => change create user to Creat and Update User
    11. User list page add user search option
    12. Update mobile view
    13. User change password not woking
    14. Update Ticket design. (add issue by + change design)
    15. Admin agent manual commission

[X] Seat status plan bug
[] Guest name should be updated
[] Super Admin should be able to cancel reserve one by one
[X] Report total amount with number of tickets
[] Seperate sold and reserve from report
[] Super sell 
[] Cancellation report for super admin
[] Service admin should not able to see hotelswave.com agent sells

git log --pretty=format:"%h%x09%an%x09%ad%x09%s"

