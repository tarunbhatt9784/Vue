<template>
<div >


 
    <div id="documents">
            <router-link to="/"><font-awesome-icon icon="home" /></router-link>

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
            <p>{{ refresh }}</p>
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
    },
   computed: { refresh: function () {
      // `this` points to the vm instance
       $(document).ready(function () {
        $('#documents-table').DataTable({
            });
        });
      return ''
    }
  }
  };
 

</script>

<style>

    #documents {
        padding-left: 15em;
        padding-right: 15em;
        padding-top: 1em;
        text-align:left;
    }
    #documents > a{
      color: black;
    }

    #documents-table {
        background-color: white;
    }</style>

</style>

