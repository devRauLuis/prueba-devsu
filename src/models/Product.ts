type Product = {
  id: string; // Unique product identifier
  name: string; // Product name
  description: string; // Product description
  logo: string; // URL of a representative logo for the product
  date_release: Date; // Date to release the product to the general customers
  date_revision: Date; // Revision date of the product to change Terms and Conditions
};

export default Product;
