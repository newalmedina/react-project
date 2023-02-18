import React from 'react'
import { Image, Text, View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarrouselCardItem'

const Novedades = () => {
    const data = [
        {
            title: "Aenean leo",
            body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            title: "In turpis",
            body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
    ];



    return (
        <View className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <View className="flex items-center justify-between mb-4">
                <Text className="text-xl font-bold leading-none text-red-600 dark:text-white">Productos mas vendidos</Text>
            </View>
            <View className="flow-root">
                <Carousel
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <Image className="object-cover  w-full h-40 "
                                source={{ uri: item.imgUrl }}
                            />
                        </View>
                    )}
                    sliderWidth={300}
                    itemWidth={200}
                    loop={true}
                    autoplay={true}
                />
            </View>
        </View>
    )

}

export default Novedades;