# WEB103 Project 3 - UnityGrid Plaza

Submitted by: **Long Ta**

About this web app: **UnityGrid Plaza is a virtual community space where users can explore events by location. Users can click on different locations in an interactive visual map to view events associated with that location. The app also includes an Events page where users can view all events and filter them by location.**

Time spent: **TODO: X** hours

## Required Features

The following **required** functionality is completed:

* [x] **The web app uses React to display data from the API**
* [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**

  * [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  * [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM tablename;` to display your table contents.**
* [x] **The web app displays a title.**
* [x] **Website includes a visual interface that allows users to select a location they would like to view.**

  * [x] *Note: A non-visual list of links to different locations is insufficient.*
* [x] **Each location has a detail page with its own unique URL.**
* [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

* [x] An additional page shows all possible events

  * [x] Users can sort *or* filter events by location.
* [ ] Events display a countdown showing the time remaining before that event

  * [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

* [x] The homepage uses an interactive SVG visual map where users can hover over and click different venue areas.
* [x] The Events page includes a dropdown filter and a Show All Events button.
* [x] The backend includes separate controllers and routes for locations and events.
* [x] The API supports fetching all locations, all events, one location by ID, and events associated with a specific location.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='WEB103project3.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

This project helped me practice connecting a React frontend to an Express backend and a PostgreSQL database hosted on Render. One challenge was making sure the backend routes, frontend API service functions, and React components all used matching route paths and props. Another challenge was checking that the Events page could correctly filter events by `location_id` using data returned from the API.

For the walkthrough, the video should show:

* The Render dashboard with the PostgreSQL database available.
* The database table contents, using a query such as `SELECT * FROM events;`.
* The homepage title and interactive visual location interface.
* Clicking each location and navigating to its unique URL.
* Each location page displaying events from the database.
* The Events page showing all events.
* Filtering events by location using the dropdown.
* A passed event appearing with different formatting.

## License

Copyright 2026 Long Ta

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
