import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div>

<svg id="image" viewBox="0 0 500 500" width="125" height="125">

<g id="Loader">
  <path id="UpBox" d="M100.7 22.2h100v100h-100z" class="box" transform="rotate(-45 150.707 72.22)"/>
  <path id="RightBox" d="M177.8 99.3h100v100h-100z" class="box" transform="rotate(-45 227.781 149.296)"/>
  <path id="LeftBox" d="M22.2 100.7h100v100h-100z" class="box" transform="rotate(-45 72.217 150.709)"/>
  <path id="DownBox" d="M99.3 177.8h100v100h-100z" class="box" transform="rotate(-45 149.291 227.785)"/>
</g>
</svg>

            </div>
        );
    }
}

export default Loader;

