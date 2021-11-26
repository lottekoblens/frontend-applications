export const getData = () => {
    return new Promise((resolve) => {
        fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=netherlands&limit=20&api_key=f2ab12a57fcca396592451123c0c3ba1&format=json")
        .then(response => response.json())
        .then((data) => {
            
            const tracks = data.tracks.track
            .map(data => {
                delete data.image
                delete data.mbid
                delete data.streamable
                return data
              })
              .map(data => {
                Object.defineProperty(data, 'nameSong', Object.getOwnPropertyDescriptor(data, 'name'))
                // with the Object.defineProperty() method you can define a 
                // new property on an object or you can change an existing property on an object
                delete data.name
                return data
              })
              .map(data => {
                data.listeners = parseInt(data.listeners) // convert string to Integer for listeners and duration
                data.duration = parseInt(data.duration)
                return data
              })
              .sort((low, high) => high.duration - low.duration)
              .filter(data => {
                return data.duration > 0 // remove objects whose duration equals to 0
              })
              resolve(tracks)
        })    
})
}
