/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import RelatedItemsAndComparison from "../RelatedItemsAndComparison.jsx";
import Outfit from "../Outfit/outfit.jsx";
import RelatedItems from "../Relateditems/relateditems.jsx";
import ItemCard from "../Relateditems/itemcard.jsx";
import AddOutfit from "../Outfit/addoutfit.jsx";
import OutfitCard from "../Outfit/outfitcard.jsx";
import RelatedModal from "../Relateditems/relatedmodal.jsx";

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('Render related item components', () => {
  it('should render relateditem component', async () => {
    const productId = 37311;
    const relatedItems = render(<RelatedItemsAndComparison productId={productId} />);

    await waitFor(() => {
      const element = relatedItems.getByText('RELATED PRODUCTS');
      expect(element).toBeDefined();
    });
  });
});

describe('outfit render test', () => {
  it('should render the outfit component', async () => {
    const relatedItems = render(<RelatedItemsAndComparison productId={37311} />);
    await waitFor(() => {
      const element = relatedItems.getByText('YOUR OUTFIT');
      expect(element).toBeDefined();
    });
  });
});


describe('render right arrow', () => {
  it('should render the right arrow button', async () => {
    const { getByTestId } = render(<RelatedItems relatedItems={[
      37312,
      37313,
      37318,
      37317
  ]} />);
    await waitFor(() => {
      const button = getByTestId('rightbutton');
      expect(button).toBeDefined();
    });
  });
});

describe('render item card', () => {
  it('should render item cards', async () => {
    const { getByTestId } = render(<ItemCard item={37312} />);
    await waitFor(() => {
      const itemcard = getByTestId('itemcard');
      expect(itemcard).toBeDefined();
    });
  });
});

describe('render proper description', () => {
  it('should have correct card description', async () => {
    const itemcard = render(<ItemCard item={37312} />);
    await waitFor(() => {
      const name = itemcard.getByText('Bright Future Sunglasses');
      expect(name).toBeDefined();
    });
  });
});


describe('render outfit Card', () => {
  it('should render outfit Card', async () => {
    const { getByTestId } = render(<OutfitCard item={37312} />);
    await waitFor(() => {
      const outfitCard = getByTestId('OutfitCard');
      expect(outfitCard).toBeDefined();
    });
  });
});

describe('render comparison modal ', () => {
  it('should have modal comparison description', async () => {
    const itemcard = render(<RelatedModal mainProduct={37312} item={37311}/>);
    await waitFor(() => {
      const name = itemcard.getByText('COMPARING');
      expect(name).toBeDefined();
    });
  });
});



