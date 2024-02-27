

# Travel agency

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/issues)
[![GitHub Forks](https://img.shields.io/github/forks/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/network)

## Description

Travel agency app is an example of a travel agency app. You can see multiple trips on the trips screen, delete them, check their prices in PLN as well as in Euro and reserve or unreserve a trip.
<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/TripsScreen.png" alt="TripsScreen" width="90%"/>
</p>

## Installation from docker

1. Clone [docker image](https://hub.docker.com/repository/docker/kubijaku/travel_agency_app) (there are also docker images for specific processor [arm](https://hub.docker.com/repository/docker/kubijaku/travel_agency_app_arm64) and [amd](https://hub.docker.com/repository/docker/kubijaku/travel_agency_app_amd64)).

## Usage docker image
1. run docker image using
```bash
docker run -p 4200:4200 kubijaku/travel_agency_app
```
( or ```docker run -p 4200:4200 kubijaku/travel_agency_app_amd64``` for amd image and ```docker run -p 4200:4200 kubijaku/travel_agency_app_arm64``` for arm image). 

## Installation from repository

1. Clone the repository: `git clone https://github.com/kubijaku/TravelAgency.git`
2. Navigate to the project directory: `cd client`
3. Install dependencies: `npm install`

## Usage

To run the app locally, use the following command:

```bash
ng serve
```

Visit `http://localhost:4200` in your browser to view the app.

## Features
### Log in 
After running app you'll see log in screen where you can log in if you already have an account on the platform.

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/Login.png" alt="Login" width="90%"/>
</p>

If you forget your password you can press the button "send email" under the username and password form. It will move you to [reset password](#reset-password) screen.
If you don't have an account you can register on [register page](#sign-up).

### Reset password

Here you can reset your password by filling in form with your email and pressing button "Reset Password". The link for resetting password will be send to your email box. 

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/ResetPassword.png" alt="ResetPassword" width="90%"/>
</p>

### Sign Up 

You can register with this page. The proccess won't work if you already have an account (an error will be occured).

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/SignUp.png" alt="SignUp" width="90%"/>
</p>

### Home

If you're logged in you will see the home page of the platform. 

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/MainScreen.png" alt="MainScreen" width="90%"/>
</p>

From this page you can move to [trips screen](#trips) using button "Zobacz Wycieczki" or with a navigation bar witch is located in the top left corner. From the navigation you can also log out and move to the actual page - [home screen](#home).

### Trips

Here you can browse available trips, delete them (using trash icon placed in the bottom right corner of each trip), check the price in PLN and EURO of each trip. You can also reserve and unreseve trip using buttons "Zarezerwuj" or "Odrezerwuj". There's no possiblity to unreserve trip with maximum available places or reserve trip with no available places.

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/TripsScreen.png" alt="MainScreen" width="90%"/>
</p>

The cheapest trip is marked with a green border and the most expensive one with the red border.

<p float="left">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/GreenBorderTrip.png" alt="Chepeast" width="20%"/>
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/RedBorderTrip.png" alt="MostExpensive" width="20%"/>
</p>

Under the trips you can see summary of the reservations. If the number of reserved trips is less or equal 5 the background of summary will be red, unlike it will be green. 

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/RedSummary.png" alt="MostExpensive" width="90%"/>
</p>

<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/GreenSummary.png" alt="Chepeast" width="90%"/>
</p>


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact [Your Name](mailto:kubijaku11@gmail.com).
