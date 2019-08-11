<template>
<div >
  <router-link to="/">Home</router-link>


 
    <div id="documents">

            <table id="documents-table" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Location</th>
                        <th>Download Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="doc in myJson.policies[0].Documents">
                        <td>{{doc.Name}}</td>
                        <td>{{doc.Type}}</td>
                        <td>{{doc.Size}}</td>
                        <td>{{doc.Location}}</td>
                        <td><a v-bind:href="doc.DownloadLink" target="_blank">Download me</a></td>
                    </tr>
                </tbody>
                <tfoot>
                     <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Location</th>
                        <th>Download Link</th>
                    </tr>
                </tfoot>
            </table>

        </div>
</div>


</template>

<script>
import json from './../json/policy-owners.json'
// export default {
//     name: "DocumentComponent"
    
//   };

  export default {
    name: "DocumentComponent",
    data() {
      return {
        msg: "My Profile Component",
        json1:{a:"b",c:"d"},
        myJson: json
      };
    }
  };
  $(document).ready(function () {
        $('#documents-table').DataTable({
            });
        });

</script>

<style>
<style>
body {
        background: url("https://mdbootstrap.com/img/Photos/Others/img (50).jpg") no-repeat center center
    }

    #documents {
        padding-left: 15em;
        padding-right: 15em;
        padding-top: 1em;
    }

    #documents-table {
        background-color: white;
    }</style>

</style>

