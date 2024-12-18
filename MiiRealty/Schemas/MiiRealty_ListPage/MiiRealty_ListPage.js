define("MiiRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "MiiRealty"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "MiiRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "3fd4e083-ed7b-d8c1-667e-5d6bd31e1590",
							"code": "PDS_MiiNumber",
							"caption": "#ResourceString(PDS_MiiNumber)#",
							"dataValueType": 28,
							"width": 133
						},
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_MiiName",
							"caption": "#ResourceString(PDS_MiiName)#",
							"dataValueType": 1,
							"width": 177
						},
						{
							"id": "ecc1016a-41b6-2194-3d36-361b4d812838",
							"code": "PDS_MiiArea",
							"caption": "#ResourceString(PDS_MiiArea)#",
							"dataValueType": 4
						},
						{
							"id": "7367eebf-fd88-5f44-3af1-417f8adf11bf",
							"code": "PDS_MiiPrice",
							"caption": "#ResourceString(PDS_MiiPrice)#",
							"dataValueType": 6
						},
						{
							"id": "2c7dd422-b8ad-b7b9-f9f5-98d693663a93",
							"code": "PDS_MiiRealtyType",
							"caption": "#ResourceString(PDS_MiiRealtyType)#",
							"dataValueType": 10,
							"width": 132
						},
						{
							"id": "4597fa8d-73f4-eb3e-d87c-9795d843e818",
							"code": "PDS_MiiRealtyOfferType",
							"caption": "#ResourceString(PDS_MiiRealtyOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "4a42e676-51d1-2bbb-e7ef-304f529965c3",
							"code": "PDS_MiiRealtyManager",
							"caption": "#ResourceString(PDS_MiiRealtyManager)#",
							"dataValueType": 10
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_MiiNumber": {
						"modelConfig": {
							"path": "PDS.MiiNumber"
						}
					},
					"PDS_MiiName": {
						"modelConfig": {
							"path": "PDS.MiiName"
						}
					},
					"PDS_MiiArea": {
						"modelConfig": {
							"path": "PDS.MiiArea"
						}
					},
					"PDS_MiiPrice": {
						"modelConfig": {
							"path": "PDS.MiiPrice"
						}
					},
					"PDS_MiiRealtyType": {
						"modelConfig": {
							"path": "PDS.MiiRealtyType"
						}
					},
					"PDS_MiiRealtyOfferType": {
						"modelConfig": {
							"path": "PDS.MiiRealtyOfferType"
						}
					},
					"PDS_MiiRealtyManager": {
						"modelConfig": {
							"path": "PDS.MiiRealtyManager"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "CreatedOn"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "MiiRealty",
					"attributes": {
						"MiiNumber": {
							"path": "MiiNumber"
						},
						"MiiName": {
							"path": "MiiName"
						},
						"MiiArea": {
							"path": "MiiArea"
						},
						"MiiPrice": {
							"path": "MiiPrice"
						},
						"MiiRealtyType": {
							"path": "MiiRealtyType"
						},
						"MiiRealtyOfferType": {
							"path": "MiiRealtyOfferType"
						},
						"MiiRealtyManager": {
							"path": "MiiRealtyManager"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});