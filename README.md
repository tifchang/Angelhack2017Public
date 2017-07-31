## Parro: an automated interviewing platform
This product was built for AngelHack 2017 Silicon Valley

#### Frontend
Our frontend was built using [React](https://facebook.github.io/react/) and [Bulma](http://bulma.io/), a responsive, flex-box based CSS framework. Parro's seamless user interface required little to no user effort, as in the entire experience was guided by us. Therefore, managing state as well as event handling got complicated. For example, rendering different components based off user inputs, or the same component with different props, at the same route meant clearly tracking the state. Another difficulty we overcame was dealing with video and audio recording. We used [RecordRTC](https://github.com/muaz-khan/RecordRTC/) to send audio and video snippets to our server. The frontend dealt with timeslicing our video blobs and capturing audio at the appropriate intervals to only process what was neccessary. 

