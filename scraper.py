import requests
from bs4 import BeautifulSoup as bs
import urllib
import shutil
from selenium import webdriver
import json

def scrap():
    
    URL = 'https://www.money.pl/pieniadze/nbp/srednie/'
    page = requests.get(URL)

    soup = bs(page.content, 'lxml')
    content = soup.find('div', {'class' :'rt-table'})
    
    for i in content:
        names = i.find

    print(names)

    
def scrapNews():
    URL = 'https://www.money.pl/'
    res = requests.get(URL)
    # soup = bs(res.text, 'lxml')
    # browser = webdriver.Chrome(executable_path='chromedriver')
    # browser.get(URL)
    soup = bs(res.text, 'lxml')

    news_box = soup.find('div', {'class' : 'sc-1ryr6j3-1 dMyByK'})
    all_news = news_box.find_all('a', {'class' : 'sc-8jwq64-5 dEHiLx'})
    all_img = news_box.find_all('img', {'class' : 'sc-8jwq64-1 hPiQpj'})

    hrefs = []
    titles = []
    images = []

    for a in all_news:
        if a.get('href')[:5] == 'https':
            hrefs.append(a.get('href'))
        else:
            correct = 'https://money.pl' + a.get('href')
            hrefs.append(correct)

    for element in all_img:
        titles.append(element.get('alt'))
        images.append(element.get('src'))

    newsData = {}

    for i in range(len(all_news)):
        newsData['news'+str(i)] = {}
        newsData['news'+str(i)]['href'+str(i)] = hrefs[i]
        newsData['news'+str(i)]['title'+str(i)] = titles[i]
        newsData['news'+str(i)]['image'+str(i)] = images[i]

    return newsData

def toJson(file):
    newsData = json.dumps([{'name' : k, 'parameters' : v} for k,v in file.items()], indent=4)
    return newsData

newsData = scrapNews()

    
news = json.dumps([{'name' : k, 'parameters' : v} for k,v in newsData.items()], indent=4)
print(newsData)
print(news)







