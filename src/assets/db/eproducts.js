// src/data/products.js
import eBook1 from "/eCover/Compliance_in_PH.png";
import eBook2 from "/eCover/Compliance_in_SG.png";
import eBook3 from "/eCover/The_Easiest_guide_to_set_up_XERO.png";
import eBook4 from "/eCover/Everyday_task_on_XERO.png";
import eBook5 from "/eCover/The_Easiest_set_up_QB.png";
import eBook6 from "/eCover/Everyday_task_on_QB.png";
import eBook7 from "/eCover/Automated_QB.png";
import eBook8 from "/eCover/Mastering_Corp_Finance.png";
import eBook9 from "/eCover/Tax_Optimization.png";
import eBook10 from "/eCover/The_Basics_of_Corp_Gov.png";
import eBook11 from "/eCover/Better_Business.png";
import eBook12 from "/eCover/Wealth_Management.png";
import eBook13 from "/eCover/101_Ideas.png";

// Define PDF file paths
import COMPLIANCEPH from "/public/eBooks/COMPLIANCE_IN_PH.pdf";
import COMPLIANCESG from "/eBooks/COMPLIANCE_IN_PH.pdf";
import XERO_SETUP from "/eBooks/GUIDE_TO_SET_UP_XERO_ FOR_YOUR_COMPANY.pdf";
import XERO_TASKS from "/eBooks/EVERYDAY_TASKS_ON_XERO.pdf";
import QB_SETUP from "/eBooks/GUIDE_TO_ SET_UP_QUICKBOOKS_FOR_YOUR_COMPANY.pdf";
import QB_TASKS from "/eBooks/EVERYDAY_TASKS _ON _QUICKBOOKS.pdf";
import QB_AUTOMATED from "/eBooks/QB_AUTOMATED.pdf";
import CORP_FINANCE from "/eBooks/MASTERING_CORPORATE_FINANCE.pdf";
import TAX_OPTIMIZATION from "/eBooks/THE_POWER_OF_TAX_OPTIMIZATION.pdf";
import CORP_GOVERNANCE from "/eBooks/THE_BASICS_OF_CORPORATE_GOVERNANCE.pdf";
import BETTER_BUSINESS from "/eBooks/BETTER BUSINESS.pdf";
import WEALTH_MANAGEMENT from "/eBooks/MASTERING_WEALTH_MANAGEMENT.pdf";
import STARTUP_IDEAS from "/eBooks/101_BUSINESS_IDEA.pdf";

const products = [
  {
    id: 1,
    is_free: true,
    category: "Compliance",
    name: "Compliance in The Philippines",
    author: "BDI Capital Ltd.",
    desc: 'Provides a comprehensive guide to navigating the country’s regulatory landscape...',
    price: 0.00,
    image: eBook1,
    pdf: COMPLIANCEPH, // Add PDF path here
  },
  {
    id: 2,
    is_free: true,
    category: "Compliance",
    name: "Compliance in Singapore",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide outlining key regulations, standards, and legal frameworks...',
    price: 0.00,
    image: eBook2,
    pdf: COMPLIANCESG, // Add PDF path here
  },
  {
    id: 3,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up XERO",
    author: "BDI Capital Ltd.",
    desc: 'A step-by-step guide to effortlessly set up and start using XERO...',
    price: 0.00,
    image: eBook3,
    pdf: XERO_SETUP, // Add PDF path here
  },
  {
    id: 4,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on XERO",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide covering common XERO tasks...',
    price: 0.00,
    image: eBook4,
    pdf: XERO_TASKS, // Add PDF path here
  },
  {
    id: 5,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on QuickBooks",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide to efficiently handling daily accounting tasks in QuickBooks...',
    price: 0.00,
    image: eBook5,
    pdf: QB_TASKS, // Add PDF path here
  },
  {
    id: 6,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up QuickBooks",
    author: "BDI Capital Ltd.",
    desc: 'A straightforward, step-by-step guide to quickly set up QuickBooks...',
    price: 0.00,
    image: eBook6,
    pdf: QB_SETUP, // Add PDF path here
  },
  {
    id: 7,
    is_free: true,
    category: "Accounting",
    name: "QuickBooks Automated",
    author: "BDI Capital Ltd.",
    price: 0.00,
    desc: 'A guide to leveraging QuickBooks automation tools...',
    image: eBook7,
    pdf: QB_AUTOMATED, // Add PDF path here
  },
  {
    id: 8,
    is_free: false,
    category: "Finance",
    name: "Mastering Corporate Finance",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to corporate financial principles...',
    price: 10.00,
    image: eBook8,
    pdf: CORP_FINANCE, // Add PDF path here
  },
  {
    id: 9,
    is_free: false,
    category: "Taxation",
    name: "The Power of Tax Optimization",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to mastering tax optimization strategies...',
    price: 10.00,
    image: eBook9,
    pdf: TAX_OPTIMIZATION, // Add PDF path here
  },
  {
    id: 10,
    is_free: false,
    category: "Corporate Housekeeping",
    name: "The Basics of Corporate Governance",
    author: "BDI Capital Ltd.",
    desc: 'A detailed guide to maintaining compliance, organization, and efficiency...',
    price: 10.00,
    image: eBook10,
    pdf: CORP_GOVERNANCE, // Add PDF path here
  },
  {
    id: 11,
    is_free: false,
    category: "Business",
    name: "Better Business",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide to enhancing business efficiency...',
    price: 10.00,
    image: eBook11,
    pdf: BETTER_BUSINESS, // Add PDF path here
  },
  {
    id: 12,
    is_free: false,
    category: "Wealth",
    name: "Mastering Wealth Management",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to building, preserving, and growing wealth...',
    price: 10.00,
    image: eBook12,
    pdf: WEALTH_MANAGEMENT, // Add PDF path here
  },
  {
    id: 13,
    category: "Startup",
    is_free: false,
    name: "101 Start-Up Business Ideas",
    author: "BDI Capital Ltd.",
    desc: 'A diverse collection of creative and practical business ideas...',
    price: 10.00,
    image: eBook13,
    pdf: STARTUP_IDEAS, // Add PDF path here
  },
];

export default products;
