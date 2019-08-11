<template>
<div>
  <router-link to="/">Home</router-link>


 <div>
    <div id="policies">

            <table id="policies-table" class="table table-striped table-bordered" style="width:100%">
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
                        <td><a v-bind:href="doc.DownloadLink" download="download" target="_blank">download me</a></td>
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
            $('#policies-table').DataTable({
            });
        });

</script>

<style>
</style>

