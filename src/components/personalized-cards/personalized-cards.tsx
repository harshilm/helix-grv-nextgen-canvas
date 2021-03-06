import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'personalized-cards',
  styleUrl: 'personalized-cards.scss',
  shadow: true
})

export class Cards {
  @Prop({ mutable: true, reflect: true }) public specialty: 'Always Visible' | 'Anatomic/Clinical Pathology' = 'Always Visible';

  async componentWillLoad() {
  }

  @Watch('specialty')
  filterCards(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {

    }
  }

  render() {
    return (
      <div class="personalized-cards">
        <div class="personalized-cards-wrapper">
          <nextgen-card>
            <h2 slot="title">
              <slot name="title"></slot>
            </h2>
            <p slot="body">
              <slot name="body"></slot>
            </p>
          </nextgen-card>
        </div>
      </div>
    );
  }
}
