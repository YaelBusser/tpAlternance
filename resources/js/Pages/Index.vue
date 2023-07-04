<template>
    <header :style="showSearch ? 'top: -235px' : 'top: 50px'">
        <div class="header">
            <div class="block-i">
                <i class="fa-solid fa-arrow-down" @click="toggleSearch"
                   :style="showSearch ? 'transform: rotate(0deg)' : 'transform: rotate(180deg)'"></i>
            </div>
            <h1>GraphFinder</h1>
            <input type="text" @input="getImgSearch()" v-model="theme" class="search"
                   placeholder="Rechercher un thème...">
            <div v-if="searching">
                <p class="good">Recherche en cours...</p>
            </div>
            <div v-else-if="imgs.length === 0">
                <p class="error">Aucun résultat</p>
            </div>
            <div v-else-if="loading">
                <progress class="pure-material-progress-circular"/>
            </div>
        </div>
    </header>
    <div class="block-images">
        <div v-for="(group, groupIndex) in (imgs.length / 3)" :key="groupIndex" class="image-group">
            <div v-for="(img, imgIndex) in imgs.slice(groupIndex * 3, (groupIndex * 3) + 3)" :key="imgIndex"
                 class="image"
                 :style="indexInfo === imgIndex && groupSelected === groupIndex ? 'width: 150vw' : 'width: 33.34vw'">
                <img :src="img['largeImageURL']" @load="onImageLoad"
                     :style="loading ? 'opacity: 0; transform: scale(0)' : 'opacity: 1; transform: scale(1);'"
                     @mouseover="indexInfo = imgIndex; groupSelected = groupIndex;"
                >
                <div class="infos"
                     :style="!loading && indexInfo === imgIndex && groupSelected === groupIndex ? 'opacity: 1; z-index: 5; bottom: 0;' : 'opacity: 0;z-index: -5; bottom: -500px'">
                    <p>Type : <span>{{ img["type"] }}</span></p>
                    <p>Tags : <span>{{ img["tags"] }}</span></p>
                    <p><span><a :href="img['largeImageURL']" target="_blank">lien</a></span></p>
                    <p>Vues : <span>{{ img["views"] }}</span></p>
                    <p>Téléchargements : <span>{{ img["downloads"] }}</span></p>
                    <p>Likes : <span>{{ img["likes"] }}</span></p>
                    <p>Commentaires : <span>{{ img["comments"] }}</span></p>
                </div>
            </div>
        </div>
        <div class="plus">
            <p @click="loadMoreImages()">voir plus</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            theme: "",
            imgs: [],
            page: 1,
            searching: true,
            loading: true,
            loadedImages: 0,
            totalImages: 0,
            showSearch: false,
            indexInfo: 0,
            groupSelected: 0,
        }
    },
    mounted() {
        this.getDefaultSearch();
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        loadMoreImages() {
            this.page++;
            this.loading = true;
            fetch(`https://pixabay.com/api/?q=${this.theme}&page=${this.page}&per_page=9&key=37894372-c0837f7cd2c6cedbc821bb625`)
                .then(response => response.json())
                .then(data => {
                    this.searching = false;
                    this.imgs.push(...data["hits"]);
                    this.totalImages = this.imgs.length;
                    this.loading = false;
                }).catch(error => {
                console.log(error);
                this.loading = false;
            });
        },
        async getDefaultSearch() {
            this.searching = true;
            this.loading = true;
            this.loadedImages = 0;
            fetch(`https://pixabay.com/api/?q=nature&page=${this.page}&per_page=9&key=37894372-c0837f7cd2c6cedbc821bb625`)
                .then(response => response.json())
                .then(data => {
                    this.searching = false;
                    this.imgs = data["hits"];
                    this.totalImages = this.imgs.length;
                }).catch(error => {
                console.log(error);
            });
        },
        async getImgSearch() {
            this.page = 1;
            this.searching = true;
            this.loading = true;
            this.loadedImages = 0;
            if (!this.theme) {
                this.getDefaultSearch();
                return;
            }
            fetch(`https://pixabay.com/api/?q=${this.theme}&page=${this.page}&per_page=9&key=37894372-c0837f7cd2c6cedbc821bb625`)
                .then(response => response.json())
                .then(data => {
                    this.searching = false;
                    this.imgs = data["hits"];
                    this.totalImages = this.imgs.length;
                }).catch(error => {
                console.log(error);
            });
        },
        onImageLoad() {
            this.loadedImages++;
            if (this.loadedImages === this.totalImages) {
                this.loading = false;
            }
        },
    }
}
</script>

<style scoped>

</style>
