<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5" xs="12">
        <h1 class="display-1">Department of</h1>
        <h1 class="display-1 mb-4">Biostatistics and Informatics</h1>
        <p class="subtitle-2"> Phòng 201 Lầu 2 - Khu nhà A2, 02 Dương Quang Trung (86/2 Thành Thái), P.12, Q.10 TPHCM</p>
        <p> +84 028 38641515</p>
        <p> bmtkyhth@pnt.edu.vn</p>
      </v-col>
      <v-col cols="12" md="7" xs="12">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.493691852656!2d106.66370671420462!3d10.773449292323551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edcb9a04805%3A0x78dc739b3be439c4!2zMiBExrDGoW5nIFF1YW5nIFRydW5nLCBQaMaw4budbmcgMTIsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1573534795925!5m2!1sen!2s"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  font-weight: bold;
}

#map {
  width: 100%;
  height: 70vh;
  background: thistle;
}
</style>
