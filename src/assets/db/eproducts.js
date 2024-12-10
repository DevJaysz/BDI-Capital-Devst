// src/data/products.js
// Adjust the path if needed
import eBook1 from "/eCover/Compliance_in_PH.png"
import eBook2 from "/eCover/Compliance_in_SG.png"
import eBook3 from "/eCover/The_Easiest_guide_to_set_up_XERO.png"
import eBook4 from "/eCover/Everyday_task_on_XERO.png"
import eBook5 from "/eCover/The_Easiest_set_up_QB.png"
import eBook6 from "/eCover/Everyday_task_on_QB.png"
import eBook7 from "/eCover/Automated_QB.png"
import eBook8 from "/eCover/Mastering_Corp_Finance.png"
import eBook9 from "/eCover/Tax_Optimization.png"
import eBook10 from "/eCover/The_Basics_of_Corp_Gov.png"
import eBook11 from "/eCover/Better_Business.png"
import eBook12 from "/eCover/Wealth_Management.png"
import eBook13 from "/eCover/101_Ideas.png"



const products = [
  {
    id: 1,
    is_free: true,
    category: "Compliance",
    name: "Compliance in The Philippines",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook1,
  },
  {
    id: 2,
    is_free: true,
    category: "Compliance",
    name: "Compliance in Singapore",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook2,
  },
  {
    id: 3,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up XERO",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook3,
  },
  {
    id: 4,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on XERO",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook4,
  },
  {
    id: 5,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on QuickBooks",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook5,
  },
  {
    id: 6,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up QuickBooks",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook6,
  },
  
  {
    id: 7,
    is_free: true,
    category: "Accounting",
    name: "QuickBooks Automated",
    author: "BDI Capital Ltd.",
    price: 0.00,
    image: eBook7,
  },
  {
    id: 8,
    is_free: false,
    category: "Finance",
    name: "Mastering Corporate Finance",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook8,

  },
  {
    id: 9,
    is_free: false,
    category: "Taxation",
    name: "The Power of Tax Optimization",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook9,
  },
  {
    id: 10,
    is_free: false,
    category: "Corporate Housekeeping",
    name: "The Basics of Corporate Governance",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook10,
  },
  {
    id: 11,
    is_free: false,
    category: "Business",
    name: "Better Business",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook11,
  },
  {
    id: 12,
    is_free: false,
    category: "Wealth",
    name: "Mastering Wealth Management",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook12,
  },
  {
    id: 13,
    category: "Startup",
    is_free: false,
    name: "101 Start-Up Business Ideas",
    author: "BDI Capital Ltd.",
    price: 10.00,
    image: eBook13,
  },
  
  
];







export default products;
