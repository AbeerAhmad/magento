import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `380px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<GoogleMap
  onClick = {props.onMapClick}
    defaultZoom={10}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {<Marker position={{ lat: props.lat, lng: props.lng }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {


  state = {

  }



  mapClickHandler =(props)=>{
    this.props.coordinate({
      lat : props.latLng.lat(),
      lng : props.latLng.lng() 
   })
    this.setState({
       lat : props.latLng.lat(),
       lng : props.latLng.lng() 
    })
  }







  render() {

    navigator.geolocation.getCurrentPosition((position) =>{


      if((!this.state.lat && !this.state.lng) &&(this.props.fill)){

        this.props.coordinate({
          lat : this.props.lati,
          lng : this.props.longi
       })
        this.setState({
          lat:this.props.lati,
          lng:this.props.longi   
        })
      }else if(!this.state.lat && !this.state.lng){
        this.props.coordinate({
          lat : position.coords.latitude,
          lng : position.coords.longitude
       })
        this.setState({
          lat:position.coords.latitude,
          lng:position.coords.longitude   
        })

   
      }
    });
  return (
      <MyMapComponent

        onMapClick={this.mapClickHandler}
        lat = {this.state.lat}
        lng = {this.state.lng}
      />
    )
  }

}
export default MyFancyComponent;

