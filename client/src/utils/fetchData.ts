export const fetchData = async (numbers?: Array<number>) => {
    const data = []

    if (!numbers) {
        const res = await fetch(`https://www.ukrposhta.ua/address-classifier/get_districts_by_region_id_and_district_ua?region_id=`)
        const xml = await res.text();
        data.push(xml);
        return data
    }

    for (let i = 0; i < numbers.length; i++) {
        try {
            const res = await fetch(`https://www.ukrposhta.ua/address-classifier/get_districts_by_region_id_and_district_ua?region_id=${numbers[i]}`)
            const xml = await res.text();
            data.push(xml)
        } catch (err) {
            return err
        }
    }
    return data;
}

