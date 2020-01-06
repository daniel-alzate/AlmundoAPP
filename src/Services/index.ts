const url = 'http://192.168.39.124:5001'

export const getCities = async () => {
    try {
        const response = await fetch(`${url}/cities`)
        const responseJson = await response.json()
        return responseJson.cities
    } catch (error) {
        console.error(error)
    }
}

export const getHotels = async () => {
    try {
        const response = await fetch(`${url}/hotels`)
        const responseJson = await response.json()
        return responseJson.hotels
    } catch (error) {
        console.error(error)
    }
}

export const getHotelsByCity = async (id:String) => {
    try {
        const response = await fetch(`${url}/hotelsByCity/${id}`)
        console.log(response)
        const responseJson = await response.json()
        return responseJson.hotelsByCity
    } catch (error) {
        console.error(error)
    }
}

export const getHotelDetail = async (id:String) => {
    try {
        const response = await fetch(`${url}/hotelDetail/${id}`)
        const responseJson = await response.json()
        return responseJson.hotelDetail
    } catch (error) {
        console.error(error)
    }
}