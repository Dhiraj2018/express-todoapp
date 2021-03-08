import * as fs from 'fs';

module.exports ={
  readJSON: function(){
    fs.readFile( path.join(__dirname ,"data.json"), 'utf8', function (err:any, data:any) {
      return (JSON.stringify(JSON.parse(data)))
  })
}

}