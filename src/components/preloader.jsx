import React from 'react';
import $ from 'jquery';

class Preloader extends React.Component {
    componentDidMount(){
        $(window).on('load', function () {
            if ($('#preloader').length) {
              $('#preloader').delay(200).fadeOut('slow', function () {
                $(this).remove();
              });
            }
          });
    }

    render(){
        return <div id="preloader"></div>;
    }
}

export default Preloader;



