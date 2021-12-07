import React from 'react'


export default function Pictures() {
  // For loading data of user uploaded pictures
  const [limit, setLimit] = useState(100);

  const { loading, data, fetchMore } = useQuery(QUERY_PICTURES, {
    variables: {
      limit: limit,
    },
  });



  const allPictures = data?.allPictures || [];


    return (
        <div>
            
        </div>
    )
}
