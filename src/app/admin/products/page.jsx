//src/app/admin/products/page.jsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import CreateProductDialog from "@/components/admin/CreateProductDialog";
import EditProductDialog from "@/components/admin/EditProductDialog";
import ProductsTable from "@/components/admin/ProductsTable";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isEditingDialogOpen, setIsEditingDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditingDialogOpen(true);
  };

  const fetchProducts = async () => {
    const response = await axios.get("/api/products");
    //console.log(response);
    setProducts(response.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (deletedProductId) => {
    setProducts(products.filter((p) => p._id !== deletedProductId));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-teal-900">
          Administracion de productos
        </h1>
        <CreateProductDialog onProductCreated={fetchProducts} />
      </div>
      <ProductsTable
        products={products}
        onDeleteProduct={handleDelete}
        onEditProduct={handleEditClick}
      />
      <EditProductDialog
        product={selectedProduct}
        onProductSaved={fetchProducts}
        open={isEditingDialogOpen}
        setOpen={setIsEditingDialogOpen}
      />
    </div>
  );
};

export default AdminProductsPage;
