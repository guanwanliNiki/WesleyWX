// var host="http://39.106.112.135:9000/";
var host="http://localhost:62115/";
var config={
   host,
   //登入
   loginAuto_url:host+"api/WXLogin/WXAutoLogin",
   login_url:host+"api/WXLogin/WXLogin",
   loginVerify_url:host+"api/WXLogin/WXAVerifyLogin",
   //商品相关
   productType_url:host+"api/ProductTypeWX/GetList",
   productList_url:host+"api/ProductWX/GetProductList",
   //供应商客户相关
   supplierType_url:host+"api/CustomerTypeWX/GetTypeListOfPurchare",
   supplierList_url:host+"api/CustomerWX/GetCustomerListByType",
   customerType_url:host+"api/CustomerTypeWX/GetTypeListOfSale",
   customerList_url:host+"api/CustomerWX/GetCustomerListByType",
   //订单相关
   saveApply_url:host+"api/ApplyWX/SaveApply",
   getApplyInfo_url:host+"api/ApplyWX/GetApplyInfo",
   getApplyList_url:host+"api/ApplyWX/GetApplyListByPage",
   deleteApply_url:host+"api/ApplyWX/DeleteApply",
   //对账单
   getAccountNotCheckPurchase_url:host+"api/ApplyWX/GetApplyOfPurchaseAccountCheck",
   getAccountNotCheckSale_url:host+"api/ApplyWX/GetApplyOfSaleAccountCheck",
   saveAccountCheck_url:host+"api/AccountCheckWX/SaveAccountCheck",
   getAccountCheckList_url:host+"api/AccountCheckWX/GetAccountCheckListByPage",
   getAccountCheckForEdit_url:host+"api/AccountCheckWX/GetAccountCheckForEdit",
   deleteAccountCheck_url:host+"api/AccountCheckWX/DeleteAccountCheck",
   //应收付款单
   getAccountCanPaymentList_url:host+"api/AccountCanPaymentWX/GetAccountCanPaymentListByPage",
   getAccountCanPaymentAddInfo_url:host+"api/AccountCheckWX/GetAccountCanPaymentAddInfoByCheckId",
   saveAccountCanPayment_url:host+"api/AccountCanPaymentWX/SaveAccountCanPayment",
   deleteAccountCanPaymentg_url:host+"api/AccountCanPaymentWX/DeleteAccountCanPayment",
   getPaymentDays_url:host+"api/CustomerWX/GetPaymentDays",
   getAccountCanPaymentForEdit_url:host+"api/AccountCanPaymentWX/GetAccountCanPaymentForEdit",
   getListByPageOfAccountHX_url :host+"api/AccountCanPaymentWX/GetListByPageOfAccountHX",
   //收付款单
   getAccountPaymentList_url:host+"api/AccountPaymentWX/GetAccountPaymentListByPage",
   getAccountPaymentForEdit_url:host+"api/AccountPaymentWX/GetAccountPaymentForEdit",
   saveAccountPayment_url:host+"api/AccountPaymentWX/SaveAccountPayment",
   deleteAccountPayment_url:host+"api/AccountPaymentWX/DeleteAccountPayment",
   //核销
   getAccountHXList_url:host+"api/AccountHXWX/GetAccountHXListByPage",
   getAccountHXForEdit_url:host+"api/AccountHXWX/GetAccountHXForEdit",
   saveAccountHX_url:host+"api/AccountHXWX/SaveAccountHX",
   deleteAccountHX_url:host+"api/AccountHXWX/DeleteAccountHX",
   //账户
   getAccountList_url:host+"api/AccountWX/GetAccountListByPage",
   saveAccount_url:host+"api/AccountWX/SaveAccount",
   deleteAccount_url:host+"api/AccountWX/DeleteAccount",
   //仓库库位
   getStorageList_url:host+"api/StorageWX/GetStorageListByPage",
   getStorageForEdit_url:host+"api/StorageWX/GetStorageForEdit",
   saveStorage_url:host+"api/StorageWX/SaveStorage",
   deleteStorage_url:host+"api/StorageWX/DeleteStorage",
   deleteStorageLocation_url:host+"api/StorageWX/DeleteStorageLocation",
   getStorageCombobox_url:host+"api/StorageWX/GetStorageCombobox",
   getStorageLocationCombobox_url:host+"api/StorageWX/GetStorageLocationCombobox",
   getStorageInfoSelectTree_url:host+"api/StorageWX/GetStorageInfoSelectTree",
   //库存
   getInventoryList_url:host+"api/InventoryWX/GetInventoryListByPage",
}
module.exports=config;