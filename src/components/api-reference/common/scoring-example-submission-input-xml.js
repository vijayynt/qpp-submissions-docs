const xmlString = '<?xmlversion="1.0"?><data><submission>><taxpayerIdentificationNumber>000123456</taxpayerIdentificationNumber><nationalProviderIdentifier/><performanceYear>2017</performanceYear><measurementSet><category>ia</category><submissionMethod>electronicHealthRecord</submissionMethod><performanceStart>2017-01-01</performanceStart><performanceEnd>2017-06-01</performanceEnd><measurement><measureId>IA_AHE_1</measureId><value>true</value></measurement><measurement><measureId>IA_AHE_2</measureId><value>true</value></measurement><measurement><measureId>IA_AHE_3</measureId><value>true</value></measurement><measurement><measureId>IA_AHE_4</measureId><value>true</value></measurement></measurementSet><measurementSet><category>quality</category><submissionMethod>electronicHealthRecord</submissionMethod><performanceStart>2017-01-01</performanceStart><performanceEnd>2017-06-01</performanceEnd><measurement><measureId>005</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>10000</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>0</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>100</performanceRate></value></measurement><measurement>><measureId>110</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>10000</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>0</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>100</performanceRate></value></measurement><measurement><measureId>128</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>10000</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>0</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>100</performanceRate></value></measurement><measurement><measureId>191</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>10000</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>0</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>100</performanceRate></value></measurement><measurement><measureId>192</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>0</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>10000</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>0</performanceRate></value></measurement><measurement><measureId>310</measureId><value><isEndToEndReported>true</isEndToEndReported><performanceMet>10000</performanceMet><eligiblePopulationExclusion/><eligiblePopulationException/><performanceNotMet>0</performanceNotMet><eligiblePopulation>10000</eligiblePopulation><reportingRate>100</reportingRate><performanceRate>100</performanceRate></value></measurement></measurementSet><measurementSet><category>aci</category><submissionMethod>electronicHealthRecord</submissionMethod><performanceStart>2017-01-01</performanceStart><performanceEnd>2017-06-01</performanceEnd><measurement><measureId>ACI_EP_1</measureId><value><numerator>10</numerator><denominator>10</denominator></value></measurement><measurement><measureId>ACI_HIE_1</measureId><value><numerator>10</numerator><denominator>10</denominator></value></measurement><measurement><measureId>ACI_HIE_2</measureId><value><numerator>10</numerator><denominator>10</denominator></value></measurement><measurement><measureId>ACI_HIE_3</measureId><value><numerator>10</numerator><denominator>10</denominator></value></measurement><measurement><measureId>ACI_INFBLO_1</measureId><value>true</value></measurement><measurement><measureId>ACI_ONCACB_1</measureId><value>false</value></measurement><measurement><measureId>ACI_ONCDIR_1</measureId><value>true</value></measurement><measurement><measureId>ACI_PEA_1</measureId><value><numerator>10</numerator><denominator>10</denominator></value></measurement><measurement><measureId>ACI_PHCDRR_1</measureId><value>true</value></measurement><measurement><measureId>ACI_PPHI_1</measureId><value>true</value></measurement></measurementSet></submission></data>';

module.exports = xmlString;