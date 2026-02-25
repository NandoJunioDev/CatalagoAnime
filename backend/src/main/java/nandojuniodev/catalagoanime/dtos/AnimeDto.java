package nandojuniodev.catalagoanime.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import nandojuniodev.catalagoanime.dtos.response.ImagesDto;


public record AnimeDto(String title, ImagesDto images,  @JsonProperty("mal_id") Integer malId) {
}
