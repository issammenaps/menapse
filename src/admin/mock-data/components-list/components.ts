import { sections } from "./section-list";

export const Components = [
    ...sections,
    {
        type: "Section", 
        name: "Section",
        icon: "bi bi-layout-sidebar",
        id: null,
        category: 'CONTAINER',
        props: {
            background: { type: "text", value: "", isTranslated: true, isHiden: false },
            fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "main-wrapper section-margin-6 section-padding-x", isTranslated: true, isHiden: false }
        },
        childrens: [
            {
                type: "Grid",
                icon: "bi bi-grid",
                id: null,
                category: 'CONTAINER',
                props: { className: { type: "text", value: "main-wrapper", isTranslated: true, isHiden: false } },

                childrens: []
            },
        ]
    },


    {
        type: "Section", 
        name: "Section",
        icon: "bi bi-layout-sidebar",
        id: null,
        category: 'CONTAINER',
        props: {
            background: { type: "text", value: "", isTranslated: true, isHiden: false },
            fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "main-wrapper section-margin-6 section-margin-15 section-padding-x position-relative margin-bottom-xxl ", isTranslated: true, isHiden: false }
        },
        childrens: [
            {

                type: "Grid",
                icon: "bi bi-grid",
                id: null,
                category: 'CONTAINER',
                props: { className: { type: "text", value: "main-wrapper", isTranslated: true, isHiden: false } },

                childrens: [


                    {
                        type: "Widget",
                        icon: "bi bi-layout-three-columns",
                        id: null,
                        category: 'CONTAINER',
                        props: {
                            children: { type: "text", value: "", isTranslated: true, isHiden: false },
                            size: { type: "text", value: 6, isTranslated: true, isHiden: false },
                            className: { type: "text", value: `order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2 d-flex align-items-center   section-padding mt-lg-5`, isTranslated: true, isHiden: false },
                        },
                        childrens: [
                            {
                                type: "ImageContainer",
                                icon: "bi bi-card-text",
                                id: null,
                                category: 'ATOMIC',
                                props: {
                                    src: { type: "text", value: "/Fleche-1-Home.png", isTranslated: true, isHiden: false },
                                    className: { type: "text", value: "fleche-1-home flech_width position-absolute", isTranslated: true, isHiden: false },
                                },
                                childrens: []
                            }
                        ]
                    },

                    {
                        type: "Widget",
                        icon: "bi bi-layout-three-columns",
                        id: null,
                        category: 'CONTAINER',
                        props: {
                            children: { type: "text", value: "", isTranslated: true, isHiden: false },
                            size: { type: "number", value: 6, isTranslated: true, isHiden: false },
                            className: { type: "text", value: "order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5", isTranslated: true, isHiden: false },
                        },
                        childrens: [
                            {
                                type: "Card",
                                icon: "bi bi-card-text",
                                id: null,
                                category: 'ATOMIC',
                                props: {
                                    styleHeaderPage: { type: "text", value: "left-border HeaderPage", isTranslated: true, isHiden: false },
                                    styleContentPage: { type: "text", value: "OurValuesheadertext", isTranslated: true, isHiden: false },
                                    HeaderTitle: { type: "text", value: "<h2>What makes us <br> different?</H2>", isTranslated: true, isHiden: false },
                                    content: { type: "text", value: "<p>We combine our business expertise with our technological mastery and data in order to bring you sustainable and innovative solutions.</p>", isTranslated: true, isHiden: false }
                                },
                                childrens: []
                            }
                        ]
                    }



                ]


            }
        ]
    },

    {
        type: "Section",
        name: "Section",
        icon: "bi bi-layout-sidebar",
        id: null,
        category: 'CONTAINER',
        props: {
            background: { type: "text", value: "", isTranslated: true, isHiden: false },
            fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "section-padding-y position-relative", isTranslated: true, isHiden: false }
        },
        childrens: [
            {
                type: "Section",
                icon: "bi bi-layout-sidebar",
                id: null,
                category: 'CONTAINER',
                props: {
                    background: { type: "text", value: "", isTranslated: true, isHiden: false },
                    fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
                    className: { type: "text", value: "section-padding-y position-relative", isTranslated: true, isHiden: false }
                },
                childrens: [
                    {
                        type: "Grid",
                        icon: "bi bi-grid",
                        id: null,
                        category: 'CONTAINER',
                        props: { className: { type: "text", value: "main-wrapper", isTranslated: true, isHiden: false } },

                        childrens: [


                            {
                                type: "Widget",
                                icon: "bi bi-layout-three-columns",
                                id: null,
                                category: 'CONTAINER',
                                props: {
                                    children: { type: "text", value: "", isTranslated: true, isHiden: false },
                                    size: { type: "text", value: 6, isTranslated: true, isHiden: false },
                                    className: { type: "text", value: `order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2 d-flex align-items-center   section-padding mt-lg-5`, isTranslated: true, isHiden: false },
                                },
                                childrens: [
                                    {
                                        type: "Button",
                                        icon: "bi bi-link",
                                        id: null,
                                        category: 'ATOMIC',
                                        props: {
                                            variant: { type: "text", value: "link", isTranslated: true, isHiden: false },
                                            title: { type: "text", value: "Discover them", isTranslated: true, isHiden: false },
                                            href: { type: "text", value: "/our-values", isTranslated: true, isHiden: false }
                                        },
                                        childrens: []
                                    }
                                ]
                            },

                            {
                                type: "Widget",
                                icon: "bi bi-layout-three-columns",
                                id: null,
                                category: 'CONTAINER',
                                props: {
                                    children: { type: "text", value: "", isTranslated: true, isHiden: false },
                                    size: { type: "number", value: 6, isTranslated: true, isHiden: false },
                                    className: { type: "text", value: "order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5", isTranslated: true, isHiden: false },
                                },
                                childrens: [
                                    {
                                        type: "Card",
                                        icon: "bi bi-card-text",
                                        id: null,
                                        category: 'ATOMIC',
                                        props: {
                                            styleHeaderPage: { type: "text", value: "text-white left-border HeaderPage", isTranslated: true, isHiden: false },
                                            styleContentPage: { type: "text", value: "text-white OurValuesheadertext", isTranslated: true, isHiden: false },
                                            HeaderTitle: { type: "text", value: "hello", isTranslated: true, isHiden: false },
                                            content: { type: "text", value: "hello", isTranslated: true, isHiden: false }
                                        },
                                        childrens: []
                                    }
                                ]
                            }







                        ]
                    },

                ]

            }
        ]
    },

    {
        type: "Section",
        name: "Section",
        icon: "bi bi-1-square",
        id: null,
        category: 'Container',
        props: {
            background: { type: "text", value: "", isTranslated: true, isHiden: false },
            fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "main-wrapper  section-padding-x position-relative", isTranslated: true, isHiden: false }
        },
        childrens: [

            {
                type: "Card",
                icon: "bi bi-window",
                id: null,
                category: 'ATOMIC',
                props: {
                    HeaderTitle: { type: "text", value: "<h2>What makes us <br> different?</H2>", isTranslated: true, isHiden: false },
                    content: { type: "text", value: "<p>We combine our business expertise with our technological mastery and data in order to bring you sustainable and innovative solutions.</p>", isTranslated: true, isHiden: false },
                    styleHeaderPage: { type: "email", value: "left-border HeaderPage", isTranslated: true, isHiden: false },
                    styleContentPage: { type: "text", value: "OurValuesheadertext ", isTranslated: true, isHiden: false },
                    cardStyle: { type: "text", value: " ", isTranslated: true, isHiden: false },

                    action: {
                        type: "text", value: { href: "#", title: "#", isTranslated: true, isHiden: false },
                        isTranslated: true, isHiden: false
                    }
                },
                childrens: []
            },
            {
                type: "Hotspot",
                icon: "bi bi-geo-alt-fill",
                id: null,
                category: 'ATOMIC',
                props: {
                    className: { type: "text", value: "section-padding mt-lg-5", isTranslated: true, isHiden: false },
                },
                childrens: []
            },
        ]
    },
    {
        type: "ImageContainer",
        name: "ImageContainer",
        icon: "bi bi-card-text",
        id: null,
        category: 'ATOMIC',
        props: {
            src: { type: "text", value: "/Fleche-1-Home.png", isTranslated: true, isHiden: false },
            className: { type: "text", value: "fleche-1-home flech_width position-absolute", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "Card",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {
            HeaderTitle: {
                type: "text", value: "<h1>test</h1>",
                isTranslated: true, isHiden: false
            },
            content: { type: "text", value: "<h1>test</h1>", isTranslated: true, isHiden: false },
            styleHeaderPage: { type: "email", value: " ", isTranslated: false, isHiden: false }, 
            styleContentPage: { type: "text", value: " ", isTranslated: false, isHiden: true },
             cardStyle: { type: "text", value: " ", isTranslated: false, isHiden: true },
              action: { type: "text", value: { href: "#", title: "#", isTranslated: true, isHiden: false }, isTranslated: false, isHiden: false }
        },
        childrens: []
    },

    {
        type: "Carousel",
        name: "Carousel",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {},
        childrens: []
    },
    {
        type: "Grid",
        name: "Grid",
        icon: "bi bi-grid",
        id: null,
        category: 'CONTAINER',
        props: { className: { type: "text", value: "", isTranslated: true, isHiden: false } },

        childrens: []
    },

    {
        type: "ScrollComponent",
        name: "ScrollComponent",
        icon: "bi bi-grip-vertical",
        id: null,
        category: 'ATOMIC',
        props: { content: { type: "text", value: "", isTranslated: true, isHiden: false }, styleContentPage: { type: "text", value: "", isTranslated: true, isHiden: false } },
        childrens: []
    },
    {
        type: "Section",
        name: "Section",
        icon: "bi bi-layout-sidebar",
        id: null,
        category: 'CONTAINER',
        props: { background: { type: "text", value: "", isTranslated: true, isHiden: false }, fullWidth: { type: "text", value: "", isTranslated: true, isHiden: false }, className: { type: "text", value: "", isTranslated: true, isHiden: false } },
        childrens: []
    },

    {
        type: "Icon",
        name: "Icon",
        icon: "bi bi-emoji-smile",
        id: null,
        category: 'ATOMIC',
        props:
        {
            icon: { type: "text", value: "url", isTranslated: true, isHiden: false },
            text: { type: "text", value: "", isTranslated: true, isHiden: false },
            textColor: { type: "text", value: "", isTranslated: true, isHiden: false },
            desktopHeight: { type: "text", value: "", isTranslated: true, isHiden: false },
            desktopWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
            mobileHeight: { type: "text", value: "", isTranslated: true, isHiden: false },
            mobileWidth: { type: "text", value: "", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "Button",
        name: "Button",
        icon: "bi bi-play-btn-fill",
        id: null,
        category: 'ATOMIC',
        props: {
            title: { type: "text", value: "edit text", isTranslated: true, isHiden: false },
            variant: { type: "text", value: "btnLink", isTranslated: true, isHiden: false },
            styleButton: { type: "text", value: "w-50 py-3  centre section2--ourdna_button", isTranslated: true, isHiden: false },
            desktopHeight: { type: "text", value: "*", isTranslated: true, isHiden: false },
            desktopWidth: { type: "text", value: "*", isTranslated: true, isHiden: false },
            mobileHeight: { type: "text", value: "*", isTranslated: true, isHiden: false },
            href: { type: "text", value: "*", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "CardBlog",
        name: "CardBlog",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {
            imgsrc: { type: "text", value: "edit text", isTranslated: true, isHiden: false },
            Cardtitle: { type: "text", value: "btnLink", isTranslated: true, isHiden: false },
            content: { type: "text", value: "", isTranslated: true, isHiden: false },
            href: { type: "text", value: "", isTranslated: true, isHiden: false },
            tag: { type: "text", value: "", isTranslated: true, isHiden: false },
        },

        childrens: []
    },
    {
        type: "Hotspot",
        name: "Hotspot",
        icon: "bi bi-geo-alt-fill",
        id: null,
        category: 'ATOMIC',
        props: {
            className: { type: "text", value: "edit text", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "Hotspot2",
        name: "Hotspot2",
        icon: "bi bi-geo-alt-fill",
        id: null,
        category: 'ATOMIC',
        props: {
            className: { type: "text", value: "edit text", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "Widget",
        name: "Widget",
        icon: "bi bi-layout-three-columns",
        id: null,
        category: 'ATOMIC',
        props: {
            children: { type: "text", value: "", isTranslated: true, isHiden: false },
            size: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "section-padding  mt-lg-5", isTranslated: true, isHiden: false },
        },
        childrens: []
    },

    {
        type: "DataTable",
        name: "DataTable",
        icon: "bi bi-table",
        id: null,
        category: 'ATOMIC',
        props: {
            tableHead: { type: "text", value: [{ title: "", author: "" }], isTranslated: true, isHiden: false },
            tableData: { type: "text", value: [{ title: "", author: "" }], isTranslated: true, isHiden: false },
            title: { type: "text", value: "", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "GalleryFootprint",
        name: "Gallery",
        icon: "bi bi-images",
        id: null,
        category: 'ATOMIC',
        props: {
            data: { type: "text", value: "", isTranslated: true, isHiden: false },
            style: { type: "text", value: "", isTranslated: true, isHiden: false },
            className: { type: "text", value: "", isTranslated: true, isHiden: false },
            padding: { type: "text", value: "", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "Slider",
        name: "Slider",
        icon: "bi bi-images",
        id: null,
        category: 'ATOMIC',
        props: {
            className: { type: "text", value: "", isTranslated: true, isHiden: false },
        },
        childrens: []
    },
    {
        type: "CardSolutions",
        name: "CardSolutions",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {
            icon: { type: "text", value: "", isTranslated: true, isHiden: false },
            title: { type: "text", value: "", isTranslated: true, isHiden: false },
            text: { type: "text", value: "", isTranslated: true, isHiden: false },
            textColor: { type: "number", value: 0, isTranslated: true, isHiden: false },
            desktopHeight: { type: "number", value: 0, isTranslated: true, isHiden: false },
            desktopWidth: { type: "number", value: 0, isTranslated: true, isHiden: false },
            mobileHeight: { type: "number", value: 0, isTranslated: true, isHiden: false },
            mobileWidth: { type: "number", value: 0, isTranslated: true, isHiden: false },
            className: { type: "text", value: "", isTranslated: true, isHiden: false },
            deletedText: { type: "text", value: "", isTranslated: true, isHiden: false },

        },
        childrens: []
    },
    {
        type: "Expertise",
        name: "Expertise",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {},
        childrens: []
    },
    {
        type: "ContentOurOrigins",
        name: "ContentOurOrigins",
        icon: "bi bi-window",
        id: null,
        category: 'ATOMIC',
        props: {},
        childrens: []
    },
]



