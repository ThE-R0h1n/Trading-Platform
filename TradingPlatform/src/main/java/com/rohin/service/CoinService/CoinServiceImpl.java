package com.rohin.service.CoinService;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rohin.modal.Coin;
import com.rohin.repository.CoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class CoinServiceImpl implements CoinService {

    @Autowired
    private CoinRepository coinRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public List<Coin> getCoinlist(int page) throws Exception {
        String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page="+page;

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<String>("Parameters",headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            List<Coin> coinList = objectMapper.readValue(response.getBody(),
                    new TypeReference<List<Coin>>() {});

            return coinList;
        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getMarketChart(String coinId, int days) throws Exception {
        String url = "https://api.coingecko.com/api/v3/coins/"+coinId+"/market_chart?vs_currency=usd&days="+days;

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<>("Parameters", headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            return response.getBody();

        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getCoinDetails(String coinId) throws Exception {
        String url = "https://api.coingecko.com/api/v3/coins/"+coinId;

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<>("Parameters", headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            JsonNode jsonNode= objectMapper.readTree(response.getBody());

            Coin coin = new Coin();
            coin.setId(jsonNode.get("id").asText());
            coin.setName(jsonNode.get("name").asText());
            coin.setSymbol(jsonNode.get("symbol").asText());
            coin.setImage(jsonNode.get("image").get("large").asText());

           JsonNode marketData = jsonNode.get("market_data");

           coin.setCurrentPrice(marketData.get("current_price").get("usd").asDouble());
           coin.setMarketCap(marketData.get("market_cap").get("usd").asLong());
           coin.setMarketCapRank(marketData.get("market_cap_rank").asInt());
           coin.setTotalVolume(marketData.get("total_volume").get("usd").asLong());
           coin.setHigh24h(marketData.get("high_24h").get("usd").asDouble());
           coin.setLow24h(marketData.get("low_24h").get("usd").asDouble());
           coin.setPriceChange24h(marketData.get("price_change_24h").asDouble());
           coin.setPriceChangePercentage24h(marketData.get("price_change_percentage_24h").asDouble());
           coin.setMarketCapChange24h(marketData.get("market_cap_change_24h").asLong());
           coin.setMarketCapChangePercentage24h(marketData.get("market_cap_change_percentage_24h").asLong());
           coin.setTotalSupply(marketData.get("total_supply").asLong());

           coinRepository.save(coin);

            return response.getBody();

        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Coin findById(String coinId) throws Exception {
        Optional<Coin> optionalCoin= coinRepository.findById(coinId);
        if(optionalCoin.isEmpty()){
            throw new Exception("Coin not found");
        }
        return optionalCoin.get();
    }

    @Override
    public String searchCoin(String keyword) throws Exception {
        String url = "https://api.coingecko.com/api/v3/search?query"+keyword;

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<>("Parameters", headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            return response.getBody();

        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getTop50CoinByMarketCapRank() throws Exception {
        String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per+page=50&page=1";

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<>("Parameters", headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            return response.getBody();

        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public String getTrendingCoins() throws Exception {
        String url = "https://api.coingecko.com/api/v3/search/trending";

        //TO FETCH DATA
        RestTemplate restTemplate= new RestTemplate();

        try{
            HttpHeaders headers = new HttpHeaders();

            HttpEntity<String> entity = new HttpEntity<>("Parameters", headers);

            ResponseEntity<String> response=restTemplate.exchange(url, HttpMethod.GET,entity,String.class);

            return response.getBody();

        }
        catch(HttpClientErrorException | HttpServerErrorException e){
            throw new Exception(e.getMessage());
        }
    }
}
