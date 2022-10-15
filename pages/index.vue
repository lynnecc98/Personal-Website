<template>
  <div class="homepage">
    <div class="filterWrapper">
      <div class ="filter" v-for="(button,i) of buttons" :key="i">
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button">{{button.title}}</button>
      </div>
    </div>
    <div class="galleryWrapper">
      <Stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
        <StackItem class="work" v-for="(work, i) of works" :key="i" >
          <NuxtLink to="/">
            <img :src="require(`../assets/${work.src}`)" :alt="work.title" />
            <h3>{{ work.title }}</h3>
          </NuxtLink>
        </StackItem>
      </Stack>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      works: [
        { title: "Title 1", src: "img/AbstractGoldfish_Pencil.jpeg" },
        { title: "Title 2", src: "img/ColorFish_Marker.jpg" },
        { title: "Title 3", src: "img/Dragonfly_Etching.jpg" },
        { title: "Title 4", src: "img/Snickers_MixedMedia.jpeg" },
        { title: "Title 5", src: "img/StillLife_Pen.jpg" },
        { title: "Title 6", src: "img/RabbitCage_Pen.jpeg" },
        { title: "Title 7", src: "img/Goldfish_Oil.jpg" },
        { title: "Title 8", src: "img/NudeCroquet_Charcoal.jpg" },
        { title: "Title 9", src: "img/Girl_Pencil.jpg" },
      ],
      buttons: [
        { title: "Physical"},
        { title: "Digital"},
        { title: "Art"},
        { title: "Fabrication"},
        { title: "Sculpture"},
        { title: "Exhibition"},
        { title: "Studies"}
      ]
    };
  },
};

</script>

<style scoped lang="scss">
.homepage {
  h2 {
    text-align: center;
  }
}
.work {
  cursor: pointer;
  margin: 20px 0;
  
  img {
    width: 100%;
    transition: filter 0.2s linear;
  }

  h3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: white;
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  &:hover {
    img {
      filter: brightness(0.2);
    }

    h3 {
      opacity: 1;
    }
  }
}
.filter{
  padding: 5px;
  text-align: center;
  display: inline-block;
}
.filterWrapper{
  text-align: center;
}

@import "bootstrap";
$mynewcolor:pink;

.btn-primary {
    @include button-variant($mynewcolor, darken($mynewcolor, 7.5%), darken($mynewcolor, 10%), lighten($mynewcolor,5%), lighten($mynewcolor, 10%), darken($mynewcolor,30%));
}

.btn-outline-primary {
    @include button-outline-variant($mynewcolor, #222222, lighten($mynewcolor,5%), $mynewcolor) ;
}
</style>