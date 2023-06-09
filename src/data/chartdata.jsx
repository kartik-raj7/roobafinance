const data = {
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Visitors',
          data: [27000000,21000000,27000000, 34000000, 27000000, 31000000, 34000000,24000033,28000000],
          // you can set indiviual colors for each bar
          borderColor: 'rgb(205,125,125)',
          borderWidth: 1,
        }
    ]
}
export default data;