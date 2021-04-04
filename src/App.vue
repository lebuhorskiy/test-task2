<template>
    <v-app>
        <v-main>
            <Main class="main" />

            <v-footer padless>
                <v-col
                        class="text-center"
                        cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Lebuhorskiy Vitaliy</strong>
                </v-col>
                <v-col cols="12" class="text-center">
                    <a href="https://github.com/lebuhorskiy/test-task2" target="_blank">
                        <v-chip
                                link
                                class="mr-2"
                                color="primary"
                        >
                            GIT
                        </v-chip>
                    </a>

                </v-col>
            </v-footer>
        </v-main>
    </v-app>
</template>

<script>
    import Main from './components/Main';

    export default {
        name: 'App',
        components: {
            Main,
        },
    };
</script>
<style>
    @import 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css';
    .main {
        min-height: 100vh;
    }
</style>
