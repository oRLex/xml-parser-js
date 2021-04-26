import React from 'react';

type Region = {
  REGION_ID: string
  DISTRICT_ID: string
  DISTRICT_EN: string
  DISTRICT_RU: string
  DISTRICT_UA: string
  REGION_EN: string
  REGION_RU: string
  REGION_UA: string
  DISTRICT_KOATUU: string
  REGION_KOATUU: string
}

type TrowProps = {
    data: any
    headers: Array<{ filed: string, accessor: string }>
}

const Trow: React.FC<TrowProps> = ({data, headers}) => {
    return (

        <tr>
            {headers.map(({accessor}) => (
                <td key={accessor}>
                    {data[accessor]}
                </td>
            ))}
        </tr>
    );
};

export default Trow;