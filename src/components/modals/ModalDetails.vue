<template>
    <v-dialog
            v-model="dialog"
            v-if="dialog"
            fullscreen
            transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar
                    dark
                    color="primary"
            >
                <v-btn
                        icon
                        dark
                        @click="$emit('close')"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Информация о пакете - {{ item.package.name }}</v-toolbar-title>
                <v-spacer></v-spacer>

            </v-toolbar>
            <v-list
                    three-line
                    subheader
            >


                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Дата публикации</v-list-item-title>
                        <v-list-item-subtitle>{{ item.package.date }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-list-item-title>Версия</v-list-item-title>
                        <v-list-item-subtitle>{{ item.package.version }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="item.package.author">
                    <v-list-item-content>
                        <v-list-item-title>Автор</v-list-item-title>

                        <v-list-item-subtitle v-if="item.package.author.email">Email: {{ item.package.author.email }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-if="item.package.author.name">Name: {{ item.package.author.name }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Описание</v-list-item-title>
                        <v-list-item-subtitle>{{ item.package.description }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Ключевые слова</v-list-item-title>
                        <v-list-item-subtitle>
                            <template v-for="(keyword, i) in item.package.keywords">
                                <v-chip
                                        :key="i"
                                        class="mr-2"
                                        color="dark"
                                >
                                    {{ keyword }}
                                </v-chip>

                            </template>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Ссылки</v-list-item-title>
                        <v-list-item-subtitle>
                            <template v-for="(link, i) in item.package.links">
                                <a :key="i" :href="link" target="_blank">
                                    <v-chip
                                            link
                                            class="mr-2"
                                            color="primary"
                                    >
                                        {{ link }}
                                    </v-chip>
                                </a>

                            </template>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-dialog>
</template>
<script>

    // тут можно было сделать запрос и получить больше инфы о пакете, но я не уверен что это нужно

    export default {
        props: {
            dialog: Boolean,
            item: {
                type: Object,
                required: true
            }
        },
        name: "modal-details"
    }
</script>
