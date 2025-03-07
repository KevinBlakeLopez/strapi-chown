import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or 'fetch' if you prefer
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system';

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('/api/brands'); 
        // If you used 'populate' or something else, adjust accordingly
        setBrands(response.data.data); // Strapi v4 typically returns { data: [...] }
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) return <div>Loading Brands...</div>;

  return (
    <>
      <BaseHeaderLayout title="Brand Quick List" as="h2" />
      <ContentLayout>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand Name</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id}>
                <td>{brand.id}</td>
                <td>{brand.attributes?.name || 'No name'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentLayout>
    </>
  );
};

export default BrandList;