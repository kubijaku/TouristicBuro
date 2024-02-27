

# Travel agency

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/issues)
[![GitHub Forks](https://img.shields.io/github/forks/kubijaku/TravelAgency.svg)](https://github.com/kubijaku/TravelAgency/network)

## Description

Travel agency app is an example of a travel agency app. You can see multiple trips on the trips screen, delete them, check their prices in PLN as well as in Euro and reserve or unreserve a trip.
<p align="center">
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/TripsScreen.png" alt="drawing" width="800"/>
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
  <img src="https://github.com/kubijaku/TravelAgency/blob/main/ReadmeFiles/client_images/Login.png" alt="drawing" width="800"/>
</p>
If you forget your password you can press the button "send email" under the username and password form. It will move you to [click on this link](#Description) screen.

### Sign up
- Feature 3
- ...


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact [Your Name](mailto:kubijaku11@gmail.com).
