<template>
    <v-container class="main">
        <v-row class="text-center">
            <v-col cols="12">
                <v-text-field :loading="load" v-model="search" @input="get" label="Поиск пакетов"></v-text-field>
            </v-col>
        </v-row>


        <v-row v-if="items && !load">
            <v-col v-for="(item, i) in items" :key="i" :cols="12">
                <v-card elevation="2">

                    <v-card-title>{{ item.package.name }}</v-card-title>
                    <v-card-text>{{ item.package.description }}</v-card-text>
                    <v-card-actions>
                        <v-btn
                                @click="select = item, openDialog = true"
                                color="blue-grey"
                                class="ma-2 white--text"
                        >
                            Открыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col v-if="total">
                <v-pagination
                        v-show="total > 10"
                        v-model="page"
                        :length="Math.floor(total / per_page)"
                        total-visible="8"
                        prev-icon="mdi-menu-left"
                        @input="changePage"
                        next-icon="mdi-menu-right"
                ></v-pagination>
            </v-col>
        </v-row>

        <v-row v-if="!total">
            <v-col cols="12">
                <v-badge>
                    <template v-slot:badge>
                        Введите поисковой запрос
                    </template>
                </v-badge>

            </v-col>
        </v-row>

        <modal-details @close="openDialog = false" :dialog="openDialog"
                       :item="select"></modal-details>

    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import ModalDetails from '@/components/modals/ModalDetails';

    const debounce = require('debounce')
    export default {
        data() {
            return {
                select: {},
                page: 1,
                per_page: 10,
                search: "",
                openDialog: false,
                load: false,
            }
        },
        components: {
            ModalDetails
        },
        name: 'HelloWorld',
        methods: {
            ...mapActions(['getItems']),

            // debounce задержка чтобы не делать слишком частые запросы к апи

            get: debounce(function () {
                if (this.search) {
                    this.getItems({
                        q: this.search,
                        size: this.per_page,
                        from: this.page - 1
                    }).finally(() => this.load = false);
                }

            }, 250),
            changePage(page) {
                if (!this.search) return;
                this.page = page;
                this.load = true;
                this.get();
                window.scrollTo(0, 0);
            }
        },
        watch: {
            search() {
                this.page = 1;
            }
        },
        computed: {
            ...mapGetters(['items', 'total']),
        },
        mounted() {
            this.get();
        }
    }
</script>

