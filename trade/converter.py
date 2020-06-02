import requests
import json
import csv

def converter(code):
	url = 'http://api.nbp.pl/api/exchangerates/rates/a/'+code+'/last/150/?format=json' # w /last/LICZBA mozesz dac taka liczbe danych co chcesz
	response = requests.get(url)
	data = response.json()
	# print(json.dumps(data,indent=2))	#ladnie printuje json

	with open(code+'.csv', 'w', newline='') as file:
		csv_file = csv.writer(file)
		csv_file.writerow(["effectiveDate", "mid"])

		for item in data["rates"]:
			csv_file.writerow([item['effectiveDate'],item['mid']])


country_code = {
	"AUD": "australian_dollar",
	"EUR": "euro",
	"MXN": "mexican_peso",
	"RUB": "russian_rubel",
	"CNY": "chinese_yuan",
	"GBP": "british_pound",
	"USD": "american_dollar"
}

for code in country_code:
	converter(code)