package nandojuniodev.catalagoanime.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(hidden = true)
public record JpgDto(@JsonProperty("image_url")  String imageUrl) {
}
