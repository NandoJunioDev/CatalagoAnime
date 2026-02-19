package nandojuniodev.catalagoanime.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import nandojuniodev.catalagoanime.dtos.response.ImagesDto;

public record AnimeDto(String title, ImagesDto images,  @JsonProperty("mal_id") Integer malId) {
}
