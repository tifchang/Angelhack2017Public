## Parro: an automated interviewing platform
This product was built for AngelHack 2017 Silicon Valley

### Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Contributing](#contributing)

#### Project Overview

This was an idea that resulted from a number of pivots before we ultimately zeroed in on exactly the problem we wanted
to solve: a technical interview process that's automated from start to finish. We've even added support for a Q&A session at the end of the interview, where candidates can ask Parro about the company for which they're interviewing and receive answers. There are platforms that handle the technical side like HackerRank, Codility, and others, but none of them provide support for automating the behavioral side of the hiring process, which really matters to certain startups and companies. That's what Parro was built to do.


#### Frontend
Our frontend was built using [React](https://facebook.github.io/react/) and [Bulma](http://bulma.io/), a responsive, flex-box based CSS framework. Parro's seamless user interface required little to no user effort, as in the entire experience was guided by us. Therefore, managing state as well as event handling got complicated. For example, rendering different components based off user inputs, or the same component with different props, at the same route meant clearly tracking the state. Another difficulty we overcame was dealing with video and audio recording. We used [RecordRTC](https://github.com/muaz-khan/RecordRTC/) to send audio and video snippets to our server. The frontend dealt with timeslicing our video blobs and capturing audio at the appropriate intervals to only process what was neccessary. 

#### Behavioral Implementation

For the behavioral interview, we used IBM Watson to perform speech to text translation, tone analysis, personality insight, and text to speech conversion. This allowed us write algorithms to pull metrics out of a candidate's responses like their most frequently used words, use of hesitation words (use of "like", "um", and "uh", for example), speech clarity and coherence, and speaking speed.

#### Technical Implementation

For the technical interview, we used the [React version](https://github.com/JedWatson/react-codemirror) of CodeMirror to embed a Text Editor into a webpage. Since there's no way to run code inside of that editor, we had to pull the code out of the text editor and make a request to the backend. From there, we made an API call to [glot.io](http://glot.io/) to actually run the candidate's code using test inputs. Depending on whether their output was correct, incorrect, or errored, we sent a response back to the frontend that rendered a message with the result.

The biggest challenge here was having to make multiple asynchronous API calls to glot.io to run each of the inputs we wanted to run for a given interview question. We used Axios to make each of the calls and pushed the results onto an array, where we were able to rely on Promise.all() to proceed smoothly and check the actual outputs against the expected outputs. This control flow involved requests and responses between the front and backends, multiple asynchronous API calls which we needed to keep ordered, and output validation, all of which made it really difficult to debug. Additionally, running code in whitespace sensitive languages like Python proved to be a bit of a challenge and requires special parsing and formatting to ensure that the code gets run exactly the way the candidate typed it in the text editor, which was a non-issue in languages like JavaScript, Java, and C++.

#### Q&A Implementation

The Q&A portion was implemented with api.ai, so that candidates could ask any of the typical questions about a company and get a smart response back. This does require that companies provide some information about themselves. When the candidate is satisfied, they can say something that sounds like the end of a conversation and the interview will be terminated.

### Demo

Click on this image to be taken to a video demo of Parro:

[![IMAGE ALT TEXT HERE](parro-vid.png)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

### Contributing

Interested in contributing to this project? Feel free! Create a branch, add commits, and [open a pull request](https://github.com/benhubsch/Parro/compare/).
