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
    desc:  'Provides a comprehensive guide to navigating the country’s regulatory landscape. From business permits to tax laws and industry-specific regulations, this eBook simplifies compliance requirements, helping businesses and professionals operate smoothly and legally in the Philippines.',
    price: 0.00,
    image: eBook1,
  },
  {
    id: 2,
    is_free: true,
    category: "Compliance",
    name: "Compliance in Singapore",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide outlining key regulations, standards, and legal frameworks for businesses operating in Singapore. Covering corporate governance, financial reporting, employment laws, and industry-specific compliance, this eBook ensures you understand essential requirements to stay compliant and thrive in Singapore dynamic business landscape.',
    price: 0.00,
    image: eBook2,
  },
  {
    id: 3,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up XERO",
    author: "BDI Capital Ltd.",
    desc: 'A step-by-step guide to effortlessly set up and start using XERO for your business accounting needs.',
    price: 0.00,
    image: eBook3,
  },
  {
    id: 4,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on XERO",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide covering common XERO tasks, from invoicing and expenses to reporting, ensuring smooth and efficient daily accounting operations.',
    price: 0.00,
    image: eBook4,
  },
  {
    id: 5,
    is_free: true,
    category: "Accounting",
    name: "Everyday Task on QuickBooks",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide to efficiently handling daily accounting tasks in QuickBooks. Covering everything from invoicing and expenses to payroll and financial reporting.',
    price: 0.00,
    image: eBook5,
  },
  {
    id: 6,
    is_free: true,
    category: "Accounting",
    name: "The Easiest Guide to Set Up QuickBooks",
    author: "BDI Capital Ltd.",
    desc: 'A straightforward, step-by-step guide to quickly set up QuickBooks for your business. Simplify your accounting process and get your finances up and running in no time.',
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
    desc: ' guide to leveraging QuickBooks automation tools to streamline your accounting processes, reduce errors, and save time.',
    image: eBook7,
  },
  {
    id: 8,
    is_free: false,
    category: "Finance",
    name: "Mastering Corporate Finance",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to corporate financial principles, strategies, and decision-making. Gain insights into investment, budgeting, risk management, and maximizing shareholder value. Build a strong foundation to drive sustainable growth and long-term financial success.',
    price: 10.00,
    image: eBook8,

  },
  {
    id: 9,
    is_free: false,
    category: "Taxation",
    name: "The Power of Tax Optimization",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to mastering tax optimization strategies for individuals and businesses. Discover effective techniques to minimize tax liabilities, maximize deductions, and take advantage of available credits. Learn how strategic planning and smart financial decisions can significantly boost your savings and ensure long-term financial stability.',
    price: 10.00,
    image: eBook9,
  },
  {
    id: 10,
    is_free: false,
    category: "Corporate Housekeeping",
    name: "The Basics of Corporate Governance",
    author: "BDI Capital Ltd.",
    desc: 'A detailed guide to maintaining compliance, organization, and efficiency in corporate operations. Cover essential practices for record-keeping, governance, audits, and internal controls to ensure long-term stability and legal compliance.',
    price: 10.00,
    image: eBook10,
  },
  {
    id: 11,
    is_free: false,
    category: "Business",
    name: "Better Business",
    author: "BDI Capital Ltd.",
    desc: 'A practical guide to enhancing business efficiency, strategy, and growth. Discover key insights on operations, finance, marketing, and leadership to drive success and achieve sustainable results.',
    price: 10.00,
    image: eBook11,
  },
  {
    id: 12,
    is_free: false,
    category: "Wealth",
    name: "Mastering Wealth Management",
    author: "BDI Capital Ltd.",
    desc: 'A comprehensive guide to building, preserving, and growing wealth. Explore strategies for investments, financial planning, risk management, and long-term asset protection to secure a prosperous future.',
    price: 10.00,
    image: eBook12,
  },
  {
    id: 13,
    category: "Startup",
    is_free: false,
    name: "101 Start-Up Business Ideas",
    author: "BDI Capital Ltd.",
    desc: 'A diverse collection of creative and practical business ideas to inspire and guide aspiring entrepreneurs. Discover opportunities across various industries and find the perfect fit for your skills and passions.',
    price: 10.00,
    image: eBook13,
  },
  
  
];







export default products;
