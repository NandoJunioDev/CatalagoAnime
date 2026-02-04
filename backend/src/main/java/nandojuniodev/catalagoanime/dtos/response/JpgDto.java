package nandojuniodev.catalagoanime.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record JpgDto(@JsonProperty("image_url")  String imageUrl) {
}
