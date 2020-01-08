const url = 'http://192.168.39.124:5001'

export const getCities = async () => {
    try {
        const response = await fetch(`${url}/cities`)

        if (response.ok) {
            const responseJson = await response.json()
            return responseJson.cities
        } else {
            return
        }

    } catch (error) {
        console.error(error)
    }
}

export const getHotels = async () => {
    try {
        const response = await fetch(`${url}/hotels`)

        if (response.ok) {
            const responseJson = await response.json()
            return responseJson.hotels
        } else {
            return
        }

    } catch (error) {
        console.error(error)
    }
}

export const getHotelsByCity = async (id: string) => {
    try {
        const response = await fetch(`${url}/hotelsByCity/${id}`)

        if (response.ok) {
            const responseJson = await response.json()
            return responseJson.hotelsByCity
        } else {
            return
        }

    } catch (error) {
        console.error(error)
    }
}

export const getHotelDetail = async (id: string) => {
    try {
        const response = await fetch(`${url}/hotelDetail/${id}`)

        if (response.ok) {
            const responseJson = await response.json()
            return responseJson.hotelDetail
        } else {
            return
        }

    } catch (error) {
        console.error(error)
    }
}